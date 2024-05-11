export default function Footer() {
  const dateObj = new Date();
  return (
    <footer>
      <div>
        <p>Authorized@{dateObj.getFullYear()}</p>
        <p>
          Made By Yash & Sarjeet <span>🚀</span>
        </p>
      </div>
    </footer>
  );
}
