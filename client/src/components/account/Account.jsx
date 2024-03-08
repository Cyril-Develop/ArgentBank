import "./account.scss";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  const accounts = [
    {
      id: 1,
      name: "checking (x8349)",
      balance: 2082.79,
      type: "available",
    },
    {
      id: 2,
      name: "savings (x6712)",
      balance: 10928.42,
      type: "available",
    },
    {
      id: 3,
      name: "credit card (x8349)",
      balance: 184.3,
      type: "current",
    },
  ];

  const handleViewTransactions = (accountId) => {
    navigate(`/transaction/${accountId}`);
  };

  return (
    <>
      {accounts.map((account) => (
        <article key={account.id} className="account">
          <div className="account_description">
            <h3>argent bank {account.name}</h3>
            <p>$ {account.balance.toLocaleString("en")}</p>
            <p>{account.type} balance</p>
          </div>
          <button
            className="account_btn"
            type="button"
            onClick={() => handleViewTransactions(account.id)}
          >
            View transactions
          </button>
        </article>
      ))}
    </>
  );
};

export default Account;
