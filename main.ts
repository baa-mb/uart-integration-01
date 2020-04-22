bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    receivedString = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (receivedString == "P") {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.Yes)
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.Shake, function () {
    bluetooth.uartWriteString("S")
})
input.onButtonPressed(Button.B, function () {
    bluetooth.uartWriteString("B")
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("A")
})
let receivedString = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
