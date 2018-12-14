import Layout from '../components/Layout';

const teamStyles = {
  fontSize: '18px',
  fontFamily: 'Consolas,monospace',
  wordWrap: 'wrap'
}

const Team = () => (
  <Layout>
    <h3>Team page</h3>
    <pre style={teamStyles}>
      <div><b>Team A</b>                 <b>Team B</b></div>
      <br />
      <div>Tabish(B-all)          Fazal(B)</div>
      <div>Usman(All)             Adil(O-all)</div>
      <div>Mashood(O-all)         Afzaal(O-all)</div>
      <div>Bilal(B)               Anees(B)</div>
      <div>Haris(B)               Fazal Bro(B)</div>
    </pre>
  </Layout>
)

export default Team