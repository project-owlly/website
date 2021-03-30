# Pages

## Admin Pages

## Wizard

## Create new pages

ng generate component pages/success
ng generate module pages/success --routing

### remove

` const routes: Routes = [];`

### add

` import {SolutionsComponent} from './solutions.component';`

` const routes: Routes = [ { path: '', component: SolutionsComponent, }, ];`
