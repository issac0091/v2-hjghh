cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 0)
basic.showIcon(IconNames.Happy)
if (!(input.buttonIsPressed(Button.A))) {
	
}
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.Black) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.Black)) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 200)
    }
    if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.Black) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.White)) {
        cbit_小车类.AloneCtrlSpeed(cbit_小车类.AloneState.Left_F_Motor, 50)
        cbit_小车类.AloneCtrlSpeed(cbit_小车类.AloneState.Right_Z_Motor, 255)
    }
    if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.White) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.Black)) {
        cbit_小车类.AloneCtrlSpeed(cbit_小车类.AloneState.Right_F_Motor, 50)
        cbit_小车类.AloneCtrlSpeed(cbit_小车类.AloneState.Left_Z_Motor, 255)
    }
    if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.White) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.White)) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Back, 200)
    }
})
