import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  AUTHOR_SERVICE_NAME, BLOG_PACKAGE_NAME, BlogServiceClient, AuthorServiceClient, PostBlogDTO, UpdateBlogDTO,
   PostAuthorDTO, RequestID, UpdateAuthorDTO
} from '../blog';
import { ClientGrpc } from '@nestjs/microservices';
import { BLOG_SERVICE_NAME } from 'proto/blog';



@Injectable()
export class AppService implements OnModuleInit {

  private blogService: BlogServiceClient
  private authorService: AuthorServiceClient

  constructor(@Inject(BLOG_PACKAGE_NAME) private client: ClientGrpc) { }

  onModuleInit() {
    this.blogService = this.client.getClientByServiceName<BlogServiceClient>(BLOG_SERVICE_NAME)
    this.authorService = this.client.getClientByServiceName<AuthorServiceClient>(AUTHOR_SERVICE_NAME)
  }

  getBlogs() {
    return this.blogService.getBlogs({})
  }
  getBlog(request: RequestID) {
    return this.blogService.getBlog(request)
  }

  postBlog(request: PostBlogDTO) {
    return this.blogService.postBlog(request)
  }
  updateBlog(request: UpdateBlogDTO) {
    return this.blogService.updateBlog(request)
  }
  deleteBlog(request: RequestID) {
    return this.blogService.deleteBlog(request)
  }


  getAuthors() {
    return this.authorService.getAuthors({})
  }
  getAuthor(request: RequestID) {
    return this.authorService.getAuthor(request)
  }
  postAuthor(request: PostAuthorDTO) {
    return this.authorService.postAuthor(request)
  }
  updateAuthor(request: UpdateAuthorDTO) {
    return this.authorService.updateAuthor(request)
  }
  deleteAuthor(request: RequestID) {
    return this.authorService.deleteAuthor(request)
  }

}
