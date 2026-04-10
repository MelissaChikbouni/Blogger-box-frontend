import { Injectable } from "@angular/core";
import { Category } from "../data/category";
import { catchError, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

export type CategoryCreateInput = Omit<Category, 'id'>;

@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    private categoriesUrl = `${environment.apiUrl}/v1/categories`;

    constructor(private http: HttpClient) { }
    getAll(): Observable<Category[]> {
        return this.http.get<Category[]>(this.categoriesUrl);
    }

    create(category: CategoryCreateInput): Observable<Category> {
        return this.http.post<Category>(this.categoriesUrl, category);
    }

    update(category: Category): Observable<Category> {
        return this.http.put<Category>(this.categoriesUrl, category)
            .pipe(
                catchError(this.handleError<Category>('update', category))
            );
    }

    delete(category: Category): Observable<boolean> {
        return this.http.delete<boolean>(`${this.categoriesUrl}/${category.id}`);
    }

    protected handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(`${operation} failed: ${error.message}`, error);
            return of(result as T);
        };
    }
}