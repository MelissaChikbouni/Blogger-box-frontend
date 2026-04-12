import { NgModule } from '@angular/core';
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TopBar } from './components/top-bar/top-bar';
import { provideHttpClient } from '@angular/common/http';
import { PostList } from './components/post-list/post-list';
import { PostListItem } from './components/post-list-item/post-list-item';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPost } from './components/add-post/add-post';
@NgModule({
  declarations: [
    App,
    TopBar,
    PostList,
    PostListItem,
    AddPost,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App],
})
export class AppModule { }
