function Balance(){
  const [account, setAccount] = React.useState(0);
  const ctx = React.useContext(UserContext);
  return (
    <Card
    bgcolor="primary"
    header="Balance"
    status={status}
    body={
      <>
     <div>Your Balance Is: ${ctx.balance}</div>
     </>
    }
    />
  )
}
