import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectTechStack {
  layer: string;
  tools: string;
}

interface Project {
  name: string;
  tagline: string;
  description: string;
  overview: string[];
  techStack: ProjectTechStack[];
  thumbnail: string;
  liveUrl: string;
  repoUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Jira Clone',
      tagline: 'Modern Kanban board with realtime collaboration',
      description:
        'A production-ready Jira-inspired experience built with Angular 19, NgRx, and Firebase. It ships authentication, drag-and-drop swimlanes, assignees, and threaded comments packaged in a glassmorphic UI.',
      overview: [
        '🔐 Firebase Auth, Firestore-backed tasks/comments, and session persistence.',
        '⚡ NgRx Store + Effects orchestrate auth, tasks, users, and comments pipelines.',
        '📦 Local storage rehydration keeps active sessions alive between refreshes.',
        '🧩 Standalone Angular components deliver a polished hero banner and glassy board.',
      ],
      techStack: [
        { layer: 'Frontend', tools: 'Angular 19, Angular Material, Standalone components' },
        { layer: 'State', tools: '@ngrx/store, @ngrx/effects, @ngrx/router-store, devtools' },
        { layer: 'Backend', tools: 'Firebase Auth, Firestore, Storage' },
      ],
      thumbnail: 'jira.png',
      liveUrl: 'https://jira-clone-84599.web.app/login',
    },
  ];
}
