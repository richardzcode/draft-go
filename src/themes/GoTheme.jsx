const toolbar = {
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  alignItems: 'center',
  pointerEvents: 'none',
  button: {
    width: '1.25rem',
    height: '1.25rem',
    margin: '0.25rem',
    border: '1px solid #aaa',
    borderRadius: '50%',
    pointerEvents: 'auto'
  },
  controls: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '0',
    marginLeft: '0.25rem',
    marginTop: '0',
    display: 'flex',
    zIndex: '1',
    color: '#000',
    pointerEvents: 'auto',
    control: {
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      border: '1px solid #bbb',
      borderRadius: '50%',
      margin: '0 0.2rem',
      padding: '0.2rem',
      width: '1.5rem',
      height: '1.5rem',
      fileInput: {
        position: 'absolute',
        left: '-1000rem',
        top: '-1000rem',
        visibility: 'hidden',
        opacity: 0
      }
    }
  }
};

toolbar.controls.controlDivider = Object.assign({},
  toolbar.controls.control,
  {
    width: 'auto',
    color: '#bbb',
    border: '0',
    margin: '0',
    padding: '0'
  }
)

const editor = {
  border: '1px solid #eee',
  padding: '0.5rem'
}

const GoTheme = {
  position: 'relative',
  paddingLeft: '2rem',
  paddingRight: '2rem',

  editor,
  toolbar
}

export default GoTheme;
