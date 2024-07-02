import { Controller } from '@nestjs/common';
import { BlogService } from './blog.service';
import {
  Author, Blog, Authors, BlogServiceController, Blogs, PostBlogDTO,
  UpdateBlogDTO, PostAuthorDTO, RequestID, ResponseMSG, UpdateAuthorDTO,
  BLOG_SERVICE_NAME
} from '../../../proto/blog';

import { GrpcMethod } from '@nestjs/microservices';


@Controller()
export class BlogController implements BlogServiceController {

  constructor(private readonly blogService: BlogService) { }

  @GrpcMethod(BLOG_SERVICE_NAME, 'getBlogs')
  getBlogs(): Blogs | Promise<Blogs> {
    return this.blogService.getBlogs()
  }


  @GrpcMethod(BLOG_SERVICE_NAME, 'getBlog')
  getBlog(request: RequestID): Blog | Promise<Blog> {
    return this.blogService.getBlog(request);
  }


  @GrpcMethod(BLOG_SERVICE_NAME, 'postBlog')
  postBlog(request: PostBlogDTO): Blog | Promise<Blog> {
    return this.blogService.postBlog(request);
  }


  @GrpcMethod(BLOG_SERVICE_NAME, 'updateBlog')
  updateBlog(request: UpdateBlogDTO): ResponseMSG | Promise<ResponseMSG> {
    return this.blogService.updateBlog(request);
  }


  @GrpcMethod(BLOG_SERVICE_NAME, 'deleteBlog')
  deleteBlog(request: RequestID): ResponseMSG | Promise<ResponseMSG> {
    return this.blogService.deleteBlog(request);
  }



  @GrpcMethod(BLOG_SERVICE_NAME, 'getAuthors')
  getAuthors(): Authors | Promise<Authors> {
    return this.blogService.getAuthors();
  }

  @GrpcMethod(BLOG_SERVICE_NAME, 'getAuthor')
  getAuthor(request: RequestID): Author | Promise<Author> {
    return this.blogService.getAuthor(request);
  }

  @GrpcMethod(BLOG_SERVICE_NAME, 'postAuthor')
  postAuthor(request: PostAuthorDTO): Author | Promise<Author> {
    return this.blogService.postAuthor(request);
  }

  @GrpcMethod(BLOG_SERVICE_NAME, 'updateAuthor')
  updateAuthor(request: UpdateAuthorDTO): ResponseMSG | Promise<ResponseMSG> {
    return this.blogService.updateAuthor(request);
  }

  @GrpcMethod(BLOG_SERVICE_NAME, 'deleteAuthor')
  deleteAuthor(request: RequestID): ResponseMSG | Promise<ResponseMSG> {
    return this.blogService.deleteAuthor(request);
  }


}
