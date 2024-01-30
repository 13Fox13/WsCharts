import {useEffect} from 'react';
import {Alert} from 'react-native';
import {chartsStore} from '../store/chartsStore';
import {runInAction} from 'mobx';
import throttle from 'lodash.throttle';
import {SUBSCRIBE} from '../constants';

export const useWs = () => {
  const {add, clean, onConnect, connect, scoreValue} = chartsStore;
  const ws = new WebSocket('wss://stream.binance.com:443/ws/bnbusdt');

  const onOpen = () => {
    ws.onopen = () => {
      ws.send(JSON.stringify(SUBSCRIBE));
    };
    onConnect();
  };
  const onClose = () => {
    ws.close();
    clean();
  };

  useEffect(
    () => {
      connect && onOpen();
      ws.onmessage = throttle((e: WebSocketMessageEvent) => {
        const data = JSON.parse(e?.data);
        runInAction(async () => {
          if (data?.p) {
            await add(Number(data?.p));
          }
        });
      }, scoreValue);
      ws.onerror = e => {
        Alert.alert('Error', e.message);
      };
      ws.onclose = e => {
        console.log(`Code ${e.code}`, e.reason);
      };
      return () => {
        onClose();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [connect, scoreValue],
  );

  return {onOpen, onClose};
};
