import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { QuanlyphimService } from 'src/app/_cores/services/quanlyphim.service';
@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit {
  subParam: Subscription;
  subService: Subscription;
  thamsoArr: any = [];
  phim: any = [];
  maPhim: any;
  gio: any;
  gheso: number ;
  tongtien = 0;
  danhsachghe = [
    { SoGhe: 1, TenGhe: 'số 1', Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: 'số 2', Gia: 100, TrangThai: false },
    { SoGhe: 3, TenGhe: 'số 3', Gia: 100, TrangThai: false },
    { SoGhe: 4, TenGhe: 'số 4', Gia: 100, TrangThai: false },
    { SoGhe: 5, TenGhe: 'số 5', Gia: 100, TrangThai: false },
    { SoGhe: 6, TenGhe: 'số 6', Gia: 100, TrangThai: false },
    { SoGhe: 7, TenGhe: 'số 7', Gia: 100, TrangThai: false },
    { SoGhe: 8, TenGhe: 'số 7', Gia: 100, TrangThai: false },
    { SoGhe: 9, TenGhe: 'số 9', Gia: 100, TrangThai: false },
    { SoGhe: 10, TenGhe: 'số 10', Gia: 100, TrangThai: false },
    { SoGhe: 11, TenGhe: 'số 11', Gia: 100, TrangThai: false },
    { SoGhe: 12, TenGhe: 'số 12', Gia: 100, TrangThai: false },
    { SoGhe: 13, TenGhe: 'số 13', Gia: 100, TrangThai: false },
    { SoGhe: 14, TenGhe: 'số 14', Gia: 100, TrangThai: false },
    { SoGhe: 15, TenGhe: 'số 15', Gia: 100, TrangThai: false },
    { SoGhe: 16, TenGhe: 'số 16', Gia: 100, TrangThai: false },
    { SoGhe: 17, TenGhe: 'số 17', Gia: 100, TrangThai: false },
    { SoGhe: 18, TenGhe: 'số 18', Gia: 100, TrangThai: false },
    { SoGhe: 19, TenGhe: 'số 19', Gia: 100, TrangThai: false },
    { SoGhe: 20, TenGhe: 'số 20', Gia: 100, TrangThai: false },
    { SoGhe: 21, TenGhe: 'số 21', Gia: 100, TrangThai: false },
    { SoGhe: 22, TenGhe: 'số 22', Gia: 100, TrangThai: false },
    { SoGhe: 23, TenGhe: 'số 23', Gia: 100, TrangThai: false },
    { SoGhe: 24, TenGhe: 'số 24', Gia: 100, TrangThai: false },
    { SoGhe: 25, TenGhe: 'số 25', Gia: 100, TrangThai: false },
    { SoGhe: 26, TenGhe: 'số 26', Gia: 100, TrangThai: false },
    { SoGhe: 27, TenGhe: 'số 27', Gia: 100, TrangThai: false },
    { SoGhe: 28, TenGhe: 'số 28', Gia: 100, TrangThai: false },
    { SoGhe: 29, TenGhe: 'số 29', Gia: 100, TrangThai: false },
    { SoGhe: 30, TenGhe: 'số 30', Gia: 100, TrangThai: true },
    { SoGhe: 31, TenGhe: 'số 31', Gia: 100, TrangThai: false },
    { SoGhe: 32, TenGhe: 'số 32', Gia: 100, TrangThai: false },
    { SoGhe: 33, TenGhe: 'số 33', Gia: 100, TrangThai: false },
    { SoGhe: 34, TenGhe: 'số 34', Gia: 100, TrangThai: false },
    { SoGhe: 35, TenGhe: 'số 35', Gia: 100, TrangThai: false },

    { SoGhe: 36, TenGhe: 'số 1', Gia: 100, TrangThai: false },
    { SoGhe: 37, TenGhe: 'số 2', Gia: 100, TrangThai: false },
    { SoGhe: 38, TenGhe: 'số 3', Gia: 100, TrangThai: false },
    { SoGhe: 39, TenGhe: 'số 4', Gia: 100, TrangThai: false },
    { SoGhe: 40, TenGhe: 'số 5', Gia: 100, TrangThai: false },
    { SoGhe: 41, TenGhe: 'số 6', Gia: 100, TrangThai: false },
    { SoGhe: 42, TenGhe: 'số 7', Gia: 100, TrangThai: false },
    { SoGhe: 43, TenGhe: 'số 7', Gia: 100, TrangThai: false },
    { SoGhe: 44, TenGhe: 'số 9', Gia: 100, TrangThai: false },
    { SoGhe: 45, TenGhe: 'số 10', Gia: 100, TrangThai: false },
    { SoGhe: 46, TenGhe: 'số 11', Gia: 100, TrangThai: false },
    { SoGhe: 47, TenGhe: 'số 12', Gia: 100, TrangThai: false },
    { SoGhe: 48, TenGhe: 'số 13', Gia: 100, TrangThai: false },
    { SoGhe: 49, TenGhe: 'số 14', Gia: 100, TrangThai: false },
    { SoGhe: 50, TenGhe: 'số 15', Gia: 100, TrangThai: false },
    { SoGhe: 51, TenGhe: 'số 16', Gia: 100, TrangThai: false },
    { SoGhe: 52, TenGhe: 'số 17', Gia: 100, TrangThai: false },
    { SoGhe: 53, TenGhe: 'số 18', Gia: 100, TrangThai: false },
    { SoGhe: 54, TenGhe: 'số 19', Gia: 100, TrangThai: false },
    { SoGhe: 55, TenGhe: 'số 20', Gia: 100, TrangThai: false },
    { SoGhe: 56, TenGhe: 'số 21', Gia: 100, TrangThai: false },
    { SoGhe: 57, TenGhe: 'số 22', Gia: 100, TrangThai: false },
    { SoGhe: 58, TenGhe: 'số 23', Gia: 100, TrangThai: false },
    { SoGhe: 59, TenGhe: 'số 24', Gia: 100, TrangThai: false },
    { SoGhe: 60, TenGhe: 'số 25', Gia: 100, TrangThai: false },
    { SoGhe: 61, TenGhe: 'số 26', Gia: 100, TrangThai: false },
    { SoGhe: 62, TenGhe: 'số 27', Gia: 100, TrangThai: false },
    { SoGhe: 63, TenGhe: 'số 28', Gia: 100, TrangThai: false },
    { SoGhe: 64, TenGhe: 'số 29', Gia: 100, TrangThai: false },
    { SoGhe: 65, TenGhe: 'số 30', Gia: 100, TrangThai: true },
    { SoGhe: 66, TenGhe: 'số 31', Gia: 100, TrangThai: false },
    { SoGhe: 67, TenGhe: 'số 32', Gia: 100, TrangThai: false },
    { SoGhe: 68, TenGhe: 'số 33', Gia: 100, TrangThai: false },
    { SoGhe: 69, TenGhe: 'số 34', Gia: 100, TrangThai: false },
    { SoGhe: 70, TenGhe: 'số 35', Gia: 100, TrangThai: false }
  ];
  danhsachcombo = [
    {
      id: 'cb1', image: './assets/img/01.png',
      name: 'Combo 1', gia: 65000, quantity: 0
    },
    {
      id: 'cb2', image: './assets/img/02.png',
      name: 'Combo 2 Love', gia: 81000, quantity: 0
    },
    {
      id: 'cb3', image: './assets/img/03.png',
      name: 'Combo 3 Family', gia: 182000, quantity: 0
    }
  ];
  soghedadat: number;
  sogheconlai: number;
  tongtiendatghe: number;
  dsghedadat = [];
  dscombodadat = [];
  constructor(
    private qlyPhimService: QuanlyphimService,
    private avtRoute: ActivatedRoute, // ActivatedRoute: là đối tượng dùng để lấy tham số từ URL (get params url)
  ) { }

  ngOnInit() {
    this.sogheconlai = this.danhsachghe.length;
    this.soghedadat = 0;
    this.subParam =  this.avtRoute.params.subscribe((thamso: any) => {
      // Lấy tham số từ url thông qua thuộc tính params
       this.thamsoArr = thamso.gio.split(',');
       this.maPhim = this.thamsoArr[0];
       this.gio = this.thamsoArr[1];
       this.LayChiTietPhim(this.maPhim);
  });
  }
  LayChiTietPhim(maPhim: number) {
    this.subService = this.qlyPhimService.LayChiTietPhim(maPhim).subscribe((ketqua) => {
      this.phim = ketqua;
    });
  }
  DatgheParent(value1, ghe) {
    if (value1 === true) {
      this.soghedadat++;
      this.sogheconlai --;
      this.dsghedadat.push(ghe);
    } else {
      this.soghedadat--;
      this.sogheconlai ++;
      const Index = this.dsghedadat.findIndex(g => g.SoGhe === ghe.SoGhe);
      this.dsghedadat.splice(Index, 1);
    }
  }
  tongtienghe() {
    this.tongtiendatghe = 0;
    if (this.dsghedadat.length > 0) {
      for (const ghe of this.dsghedadat) {
        this.tongtiendatghe += ghe.Gia;
      }
    }
    return this.tongtiendatghe;
  }
  trucombo = (id: string) => {
    const fineid = this.dscombodadat.findIndex(cbo => cbo.id === id);
    if (fineid !== -1) {
      if (this.dscombodadat[fineid].quantity > 0) {
        this.dscombodadat[fineid].quantity -= 1 ;
      } else {
        this.dscombodadat.splice(fineid,  1);
      }
    }
  }
  tangcombo(id: string) {
    const findid = this.dscombodadat.find(cbo => cbo.id === id);
    console.log(findid);
    if (findid === undefined) {
      const obj = this.danhsachcombo.find(combo => combo.id === id);
      obj.quantity += 1;
      return this.dscombodadat.push(obj);
      // sau return là thoát khỏi hàm, nên không cần else
    }
    findid.quantity += 1;
  }

  tinhtongtien() {
    this.tongtien = 0;
    for (const sp of this.dscombodadat) {
      this.tongtien += sp.quantity * sp.gia ;
    }
    return this.tongtien;
  }
}
