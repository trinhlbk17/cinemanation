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
  subService2: Subscription;
  thamsoArr: any = [];
  phim: any = [];
  maPhim: any;
  gio: any;
  gheso: number ;
  tongtien = 0;
  
  danhsachghe2 :any = [];
  danhsachgherap :any = [];
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
  sogheconlai = 0;
  tongtiendatghe: number;
  dsghedadat = [];
  dscombodadat = [];
  constructor(
    private qlyPhimService: QuanlyphimService,
    private avtRoute: ActivatedRoute, // ActivatedRoute: là đối tượng dùng để lấy tham số từ URL (get params url)
  ) { }

  ngOnInit() {
    for(let ghe of this.danhsachgherap){
      if(!ghe.DaDat){
        this.sogheconlai ++;
      }
    }
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
      // console.log(this.phim.LichChieu[0].MaLichChieu);
      this.LayChiTietPhongVe(this.phim.LichChieu[0].MaLichChieu);
    });
  }
  LayChiTietPhongVe(maLichChieu: number) {
    this.subService2 = this.qlyPhimService.LayChiTietPhongVe(maLichChieu).subscribe((ketqua2) => {
      this.danhsachghe2 = ketqua2;
      console.log(this.danhsachghe2.DanhSachGhe);
      this.danhsachgherap = this.danhsachghe2.DanhSachGhe;
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
      const Index = this.dsghedadat.findIndex(g => g.MaGhe === ghe.MaGhe);
      this.dsghedadat.splice(Index, 1);
    }
  }
  tongtienghe() {
    this.tongtiendatghe = 0;
    if (this.dsghedadat.length > 0) {
      for (const ghe of this.dsghedadat) {
        this.tongtiendatghe += ghe.GiaVe;
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
