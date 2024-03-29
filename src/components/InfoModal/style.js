export default {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    zIndex: 9999
  },
  content: {
    position: 'absolute',
    margin: '0 auto',
    top: '16px',
    width: '600px',
    // left: '16px',
    // right: '16px',
    bottom: '16px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0',
    outline: 'none',
    padding: '8px'
  }
}
