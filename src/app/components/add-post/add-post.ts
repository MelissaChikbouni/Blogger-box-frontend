import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Category } from '../../data/category';
import { PostCreateInput } from '../../data/post';
import { CategoryService } from '../../services/catgeoryService';
import { PostService } from '../../services/post.service';

type AddPostForm = {
  title: FormControl<string>;
  categoryId: FormControl<string>;
  content: FormControl<string>;
};

@Component({
  selector: 'app-add-post',
  standalone: false,
  templateUrl: './add-post.html',
  styleUrl: './add-post.css',
})
export class AddPost implements OnInit {
  categories: Category[] = [];

  postForm: FormGroup<AddPostForm>;

  private toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  });

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.postForm = this.formBuilder.group({
      title: this.formBuilder.nonNullable.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(150),
      ]),
      categoryId: this.formBuilder.nonNullable.control('', [Validators.required]),
      content: this.formBuilder.nonNullable.control('', [
        Validators.required,
        Validators.maxLength(2500),
      ]),
    });
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onSubmit(): void {
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched();
      this.toast.fire({
        icon: 'warning',
        title: 'Please review your post',
      });
      return;
    }

    const payload: PostCreateInput = {
      title: this.titleControl.value,
      categoryId: this.categoryIdControl.value,
      content: this.contentControl.value,
      isActive: true,
    };

    this.postService.create(payload).subscribe({
      next: () => {
        this.toast.fire({
          icon: 'success',
          title: 'Post created successfully',
        });
        this.router.navigate(['/']);
      },
      error: () => {
        this.toast.fire({
          icon: 'error',
          title: 'Unable to create post',
        });
      },
    });
  }

  onClose(): void {
    this.router.navigate(['/']);
  }

  get titleControl(): FormControl<string> {
    return this.postForm.controls.title;
  }

  get categoryIdControl(): FormControl<string> {
    return this.postForm.controls.categoryId;
  }

  get contentControl(): FormControl<string> {
    return this.postForm.controls.content;
  }
}
