const batteryBatches = [4, 5, 3, 4, 4, 6, 5]

// 0 + 1 + 2 + 3 + 4
let totalBatteries = batteryBatches.reduce((batteryAmount, assembledBatteries) =>{return batteryAmount + assembledBatteries})

