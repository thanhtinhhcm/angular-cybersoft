import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashBoardComponent } from './admin/dash-board/dash-board.component';
import { RouterModule } from '@angular/router';
import { ListNguoiDungComponent } from './admin/list-nguoi-dung/list-nguoi-dung.component';
import { AuthGuard } from '../provider/guards/auth.guard';
// import { MatHeaderRowDef, MatRowDef, MatTableModule} from '@angular/material/table';


const routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashBoardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'ds-nguoi-dung',
        component: ListNguoiDungComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    DashBoardComponent,
    ListNguoiDungComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // MatTableModule,
    // MatHeaderRowDef,
    // MatRowDef
  ]
})
export class AdminModule { }
