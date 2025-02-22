import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../_models/member';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [CommonModule, TabsModule, GalleryModule],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css',
})
export class MemberDetailComponent implements OnInit {
  private memberService = inject(MembersService);
  private route = inject(ActivatedRoute);
  member?: Member;
  imiges: GalleryItem[] = [];

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const userName = this.route.snapshot.paramMap.get('username');
    console.log(this.route.snapshot.paramMap);
    console.log(userName);

    if (!userName) return;

    this.memberService.getMember(userName).subscribe({
      next: (member) => {
        this.member = member;
        member.photos.map((photo) => {
          this.imiges.push(new ImageItem({ src: photo.url, thumb: photo.url }));
        });
      },
    });
  }
}
