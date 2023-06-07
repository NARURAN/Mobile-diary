import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import PushNotification from 'react-native-push-notification';

const PushNotification = () => {
  useEffect(() => {
    // Настройка PushNotification
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });

    // Отмена всех уведомлений
    PushNotification.cancelAllLocalNotifications();
  }, []);

  const sendNotification = () => {
    // Отправка уведомления
    PushNotification.localNotification({
      channelId: 'Shedule.jsx',
      title: 'Д/з',
      message: 'Не забудь проверить домашнее задание',
      playSound: true,