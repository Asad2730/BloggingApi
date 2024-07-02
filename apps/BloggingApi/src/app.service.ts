import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
   BLOG_PACKAGE_NAME, BlogServiceClient, PostBlogDTO, UpdateBlogDTO,
   PostAuthorDTO, RequestID, UpdateAuthorDTO,BLOG_SERVICE_NAME
} from '../../../proto/blog';
import { ClientGrpc } from '@nestjs/microservices';




@Injectable()
export class AppService implements OnModuleInit {

  private blogService: BlogServiceClient


  constructor(@Inject(BLOG_PACKAGE_NAME) private client: ClientGrpc) { }

  onModuleInit() {
    this.blogService = this.client.getClientByServiceName<BlogServiceClient>(BLOG_SERVICE_NAME)
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
    return this.blogService.getAuthors({})
  }
  getAuthor(request: RequestID) {
    return this.blogService.getAuthor(request)
  }
  postAuthor(request: PostAuthorDTO) {
    return this.blogService.postAuthor(request)
  }
  updateAuthor(request: UpdateAuthorDTO) {
    return this.blogService.updateAuthor(request)
  }
  deleteAuthor(request: RequestID) {
    return this.blogService.deleteAuthor(request)
  }

}
