import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { useUser } from '../../contexts/StateContext';
import { getToken, validateToken } from '../../services/api';
import { Container, Loading } from './styles';

function Preload() {
  const navigation = useNavigation()
  const [context, dispatch] = useUser()
  useEffect(() => {

    const checkLogin = async () => {
      const token = await getToken()

      if (token) {
        let res = await validateToken()

        if (res.error === '') {
          dispatch({
            type: 'setUser',
            payload: { user: res.user }
          })
          navigation.reset({
            index: 1,
            routes: [{ name: 'ChooseProperty' }]
          })
        }
        else {
          Alert.alert(res.error)

          dispatch({
            type: 'setToken',
            payload: { token: '' }
          })
          navigation.reset({
            index: 1,
            routes: [{ name: 'Login' }]
          })
        }
      } else {
        navigation.reset({
          index: 1,
          routes: [{
            name: 'Login'
          }]
        }
        )
      }
    }


  }, [])
  return (
    <Container>
      <Loading
        color={'#8863e6'}
        size={'large'}
      />
    </Container>
  );
};

export { Preload };
