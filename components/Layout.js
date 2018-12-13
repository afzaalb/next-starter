import Header from './Header';

const layoutStyles = {
  background: '#f4f5f6',
  maxWidth: '420px',
  margin: '25px auto',
  padding: '0 0 20px'
}

const Layout = props => (
  <div style={layoutStyles}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
