import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';

@Component({
  selector: 'about',
  template: `
  <section class="flex flex-col max-w-screen-lg justify-between mx-auto gap-5 dark:text-gray-200 overflow-y-hidden">
  <h1 class="text-3xl font-semibold dark:text-white">About Me</h1>
  <p class="justify-start">I'm Harvey S. Tapang, an aspiring front-end developer with a passion for crafting engaging and dynamic web experiences, especially with Angular. 
  Armed with creativity, determination, and a thirst for knowledge, I'm on a mission to carve out my path in the ever-evolving 
  realm of web development. With each project, I dive deeper into the intricacies of HTML, CSS, JavaScript, and Angular, constantly seeking to refine my skills and stay ahead of the curve. From mastering the latest frameworks to ensuring seamless user interactions, I approach every challenge with enthusiasm and a commitment to excellence. Join me on this journey as I transform ideas into captivating digital realities, one line of code at a time.</p>
  <p *ngFor="let a of aboutDetails"><b class="dark:text-white text-black">{{a.title}}</b><br />{{a.desc}}
  </p>
  <h1 class="text-3xl font-semibold dark:text-white">Contact Information:</h1>
  @for(c of contactInfo; track $index){
    <p>
      <b class="dark:text-white text-black ">{{c.title}}:</b><br />
      <a [href]="c.link" class="hover:underline" target="_blank">{{c.desc}}</a>
    </p>
  }
</section>
`,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor],
  standalone: true
})
export class AboutPage {
  metaService = inject(MetaService)
  constructor(){
    this.metaService.setMetaTags(
      `About - ${profileData.name}`,
      'Dive into a curated space to learn more about the person behind the name',
      ['bio', 'biography', 'information', 'about', 'contact', 'detail']
      )
  }
  public aboutDetails =  [
    {
      title: 'What I Do',
      desc: `Balancing my role as a service crew member at McDonald's with my studies as an I.T. student requires dedication and effective time management. In my position at McDonald's, I prioritize delivering exceptional customer service while maintaining a clean and organized environment. Simultaneously, as an I.T. student, I commit myself to expanding my knowledge and skills through coursework and hands-on learning experiences. Despite the challenges of juggling work and studies, I approach each day with enthusiasm and determination, knowing that both roles contribute to my personal and professional growth.`
    },
    {
      title: 'Always Learning',
      desc: `I'm always eager to learn new things. Whether
      it's staying updated on the latest technologies or exploring different coding techniques, I enjoy expanding my
      knowledge to grow as a developer.`
    },
    {
      title: 'Off-Duty Fun',
      desc: `During my off-duty hours, I find joy in coding, exploring new aspects of coding, and staying updated by reading
      the latest blogs on technology. I also enjoy playing games on my phone, watching videos, listening to popular
      songs, and taking refreshing walks outside. It's important for me to spend quality time with my family and
      friends.`
    },
    {
      title: 'Why I Code',
      desc: `I code because it allows me to turn ideas into
      reality. It's a creative outlet that lets me build useful and innovative solutions. Coding challenges me to
      solve problems and continuously improve my skills. Ultimately, it's my way of making a positive impact through
      technology.`
    },
  ];
  public contactInfo = [
    {
      title: 'Address',
      desc: `Magdalena Homes,Sto.tomas,Subic Zambales,Philippines`,
      link: ''
    },
    {
      title: 'Mobile Number',
      desc: '+639369647680',
      link: ''
    },
    {
      title: 'Email',
      desc: 'tapangharveysalas@gmail.com',
      link: 'mailto:tapangharveysalas@gmail.com'
    },
    // {
    //   title: 'Freelance',
    //   desc: 'Available',
    //   link: 'mailto:marc@kevinflor.es'
    // },
  ]
}
