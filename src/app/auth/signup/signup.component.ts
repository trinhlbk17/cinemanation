import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../../_cores/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  signInUserSub: Subscription;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(user: any) {
    const params = {
      TaiKhoan: user.username,
      MatKhau: user.password
    };
    console.log(params);
    // this.signInUserSub = this.authService.login(params).subscribe( (response) => {
    //   if (typeof response !== 'string') {
    //     localStorage.setItem('currentUser', JSON.stringify(response));
    //     this.router.navigate(['/home']);
    //   }
    // }, (error) => {
    //   console.log(error);
    // });
  }

  ngOnDestroy(): void {
    this.signInUserSub.unsubscribe();
  }
}
