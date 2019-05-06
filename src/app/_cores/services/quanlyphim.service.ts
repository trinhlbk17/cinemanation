import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuanlyphimService {

  constructor(private http: HttpClient) { }
  public LayDanhSachPhim(): Observable<any> {
    const obs = this.http.get(`http://svcy2.myclass.vn/api/quanlyphim/laydanhsachphim?manhom=GP03`);
    return obs;
  }
  public LayDanhSachPhim_sapchieu(): Observable<any> {
    const obs = this.http.get(`http://svcy2.myclass.vn/api/quanlyphim/laydanhsachphim?manhom=GP06`);
    return obs;
  }
  // public LayChiTietPhim(maPhim: number) {
  //   const obs = this.http.get(`http://svcy2.myclass.vn/api/quanlyphim/laychitietphim?maphim=${maPhim}`);
  //   return obs;
  // }
}
