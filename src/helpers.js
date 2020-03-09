import { ToastAndroid } from 'react-native';

export const showToast = (message, status) => {
    const statusType = status == 'error' ? 'danger' : 'success'
    ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50,
    );
    return null;
}
