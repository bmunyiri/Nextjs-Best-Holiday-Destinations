import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>(Reactjs / Nextjs) - Best Holiday Destinations</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Animal Reserves</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Reserve</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;