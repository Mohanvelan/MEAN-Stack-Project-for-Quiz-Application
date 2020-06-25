import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InstructionComponent } from './instruction/instruction.component';
import { QuizpageComponent } from './quizpage/quizpage.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [

  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'test/:topic', component: TestComponent},
  {path:'test', component: TestComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'instruction/:topic/:subTopic', component: InstructionComponent},
  {path:'quizpage/:top/:q/:t', component: QuizpageComponent},
  {path:'result', component: ResultComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
