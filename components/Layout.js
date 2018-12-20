import Header from './Header';

const Layout = props => (
  <div className="wrapper">
    <Header />
    <div className="content">
      {props.children}
    </div>
    <style jsx>{`
      .wrapper {
        font-family: Avenir,Ubuntu,Arial,sans-serif;
        background: #f4f5f6;
        color: #333;
        max-width: 480px;
        margin: 25px auto;
      }
      .content{
        padding: 20px;
      }
    `}</style>
  </div>
);

export default Layout;
