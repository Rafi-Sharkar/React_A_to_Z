function Card(props){
  const {name, pos, about, lang} = props;
  return(
    <div className="card">
      <h2 className="empName">{name}</h2>
      <p className="empPos">{pos}</p>
      <p className="empAbout">{about}</p>
      <p className="empLang">{lang}</p>
    </div>
  )
}

export default Card;