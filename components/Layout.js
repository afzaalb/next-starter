import Header from './Header';

const layoutStyles = {
  background: '#f4f5f6',
  maxWidth: '420px',
  margin: '25px auto',
}

const pageStyles = {
  padding: '15px'
}

const Layout = props => (
  <div style={layoutStyles}>
    <Header />
    <div style={pageStyles}>
      {props.children}
    </div>
  </div>
);

export default Layout;
