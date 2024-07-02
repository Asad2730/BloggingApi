import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { RequestID, PostBlogDTO, UpdateBlogDTO, PostAuthorDTO, UpdateAuthorDTO } from '../../../proto/blog';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('blogs')
  getBlogs() {
    return this.appService.getBlogs()
  }

  @Get('blogs/:id')
  getBlog(@Param('id') id: number) {
    const request: RequestID = { id }
    return this.appService.getBlog(request)
  }

  @Post('blogs')
  postBlog(@Body() request: PostBlogDTO) {
    return this.appService.postBlog(request)
  }

  @Put('blogs/:id')
  updateBlog(@Param('id') id: number, @Body() request: UpdateBlogDTO) {
    request.id = id
    return this.appService.updateBlog(request)
  }

  @Delete('blogs/:id')
  deleteBlog(@Param('id') id: number) {
    const request: RequestID = { id }
    return this.appService.deleteBlog(request)
  }


  @Get('authors')
  getAuthors() {
    return this.appService.getAuthors()
  }

  @Get('authors/:id')
  getAuthor(@Param('id') id: number) {
    const request: RequestID = { id }
    return this.appService.getAuthor(request)
  }

  @Post('authors')
  postAuthor(@Body() request: PostAuthorDTO) {
    return this.appService.postAuthor(request)
  }

  @Put('authors/:id')
  updateAuthor(@Param('id') id: number, @Body() request: UpdateAuthorDTO) {
    request.id = id
    return this.appService.updateAuthor(request)
  }

  @Delete('authors/:id')
  deleteAuthor(@Param('id') id: number) {
    const request: RequestID = { id }
    return this.appService.deleteAuthor(request)
  }


}
