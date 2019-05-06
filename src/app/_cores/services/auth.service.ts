import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public signupUser(params: any): Observable<any> {
    const header = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    const obs = this.http.post(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`, params, header);
    return obs;
  }

  public login(params: any): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=` + params.TaiKhoan + `&matkhau=` + params.MatKhau;
    const obs = this.http.post(url, params);
    return obs;
  }
}
