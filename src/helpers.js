import { Toast } from 'native-base'
export const showToast = (message, status) => {
    const statusType = status == 'error' ? 'danger' : 'success'
    Toast.show({
        text: message,
        buttonText: "Okay",
        position:'top',
        type: statusType   // "success, danger"
    })
}
