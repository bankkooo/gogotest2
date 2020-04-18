const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation
const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading

const gogo = state => state.app.gogo
const gogoInfo = state => state.app.gogo.info
const rpi = state => state.app.rpi
const rpiStatus = state => state.app.rpi.revision

const keyValue = state => state.app.keyValue

const socket = state => state.app.socket
const gogoControls = state => state.app.gogoControls

const labStatus = state => state.app.labstatus

// const program = state => state.app.program

export {
  toggleWithoutAnimation,
  config,
  palette,
  isLoading,
  gogo,
  gogoInfo,
  rpi,
  rpiStatus,
  keyValue,
  socket,
  gogoControls,
  labStatus
  // program,
}
