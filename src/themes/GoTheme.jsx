const toolbar = {
  position: 'absolute',
  top: '0',
  left: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  pointerEvents: 'none',
  button: {
    width: '1.2rem',
    height: '1.2rem',
    border: '1px solid #aaa',
    borderRadius: '50%',
    pointerEvents: 'auto'
  },
  controls: {
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '0.5rem',
    marginLeft: '0.25rem',
    marginTop: '-3rem',
    display: 'flex',
    zIndex: '1',
    color: 'rgba(0,0,0,.68)',
    pointerEvents: 'auto',
    control: {
      display: 'flex',
      alignItems: 'center',
      margin: '0 0.25rem',
      width: '1.2rem',
      height: '1.2rem',
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
