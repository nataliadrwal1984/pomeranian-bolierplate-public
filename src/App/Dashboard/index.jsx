import { Link } from 'react-router-dom';
import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';

const dashboardCards = [
  {
    title: 'Moje CV',
    icon: <PersonalCardIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/cv',
  },
];

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">Hej, Natalia 👋</h1>
      <p className="dashboard-description">
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="dashboard-cards">
        {dashboardCards.map((card) => {
          return (
            <div className="dashboard-card">
              <h3>{card.title}</h3>
              {card.icon}
              <p>{card.description}</p>
              <Link to={card.link}>zobacz więcej {`>`} </Link>
            </div>
          );
        })}
      </div>
      <aside className="dashboard-aside"></aside>
    </div>
  );
};
