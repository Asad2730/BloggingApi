import { Injectable } from '@nestjs/common';
import {
  Blogs, RequestID, Blog, PostBlogDTO, UpdateBlogDTO, ResponseMSG, Authors,
  Author, PostAuthorDTO, UpdateAuthorDTO
} from '../blog';

@Injectable()
export class BlogService {


  private authors: Author[] = [
    { id: 1, name: 'test', email: 'test@gmail.com' },
  ]

  private blogs: Blog[] = [
    { id: 1, authorId: this.authors[0].id, title: 'First Blog', summary: 'Summary 1', content: 'Content 1' },
  ];



  getBlogs(): Blogs | Promise<Blogs> {

    return { Blog: this.blogs };
  }
  getBlog(request: RequestID): Blog | Promise<Blog> {
    const blog = this.blogs.find(i => i.id === request.id);
    throw blog;
  }
  postBlog(request: PostBlogDTO): Blog | Promise<Blog> {
    const new_blog: Blog = {
      id: this.blogs.length + 1,
      authorId: request.authorId,
      content: request.content,
      summary: request.summary,
      title: request.title,
    }

    this.blogs.push(new_blog)
    return new_blog
  }
  updateBlog(request: UpdateBlogDTO): ResponseMSG | Promise<ResponseMSG> {
    let blog = this.blogs.find(i => i.id === request.id)
    if (blog) Object.assign(blog, request)
    return { msg: blog ? 'Blog Updated' : 'Blog Not Found' }
  }
  deleteBlog(request: RequestID): ResponseMSG | Promise<ResponseMSG> {
    let blog = this.blogs.filter(i => i.id !== request.id)
    return { msg: blog ? 'Blog Deleted' : 'Blog Not Found' }
  }


  getAuthors(): Authors | Promise<Authors> {
    return { Author: this.authors }
  }
  getAuthor(request: RequestID): Author | Promise<Author> {
    const author = this.authors.find(i => i.id === request.id);
    return author;
  }
  postAuthor(request: PostAuthorDTO): Author | Promise<Author> {
    const newAuthor: Author = {
      id: this.authors.length + 1,
      name: request.name,
      email: request.email,
    };

    this.authors.push(newAuthor);
    return newAuthor;
  }
  updateAuthor(request: UpdateAuthorDTO): ResponseMSG | Promise<ResponseMSG> {
    let author = this.authors.find(i => i.id === request.id)
    if (author) Object.assign(author, request)
    return { msg: author ? 'Updated Author' : 'Author Not Found' }
  }
  deleteAuthor(request: RequestID): ResponseMSG | Promise<ResponseMSG> {
    let index = this.authors.findIndex(i => i.id === request.id)
    if (index !== -1) this.authors.splice(index, 1)

    return { msg: index !== -1 ? 'Author Deleted' : 'Author Not Found' }
  }


}
