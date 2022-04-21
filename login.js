function Login(){
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext)

  // function validateInfo(){
  //   let showBalance = <a className="nav-link" href="#/balance/">Balance</a>;
  //   let data = JSON.stringify(ctx);
  //   console.log(data)
  //   let email = {email};
  //   let password = {password};
  //   for (let i = 0; i < data.length; i++){
  //     if (data.email === email && data.password === password){
  //       showBalance;
  //     }else{
  //       alert("enter valid info");
  //     }
  //   }
    

  // }

  // function signIn(){
  //   console.log(email,password);
  //   validateInfo();

  // }
  return (
    <Card
      bgcolor="primary"
      header="SIGN IN"
      status={status}
      body={
        <>
        Email address:<br/>
        <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
        Password:<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn btn-light" onClick="#/balance/">SIGN IN</button>
        </>
      }
    />
  ) 
}
