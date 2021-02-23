### Routing assignment
- Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)
- Add a simple navigation with two links => One leading to "Users", one leading to "Courses"
- Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)
- Pass the course ID to the "Course" page and output it there
- Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)
- Load the "Course" component as a nested component of "Courses"
- Add a 404 error page and render it for any unknown routes
- Redirect requests to /all-courses to /courses (=> Your "Courses" page)
        
### what i learned
- NavLink: I was able to discover that I can add styles when active. Able to access it (.active) in css file without explicitly adding classname to the component.
- Link: In `to` attribute, object can be passed like 
    `{  pathname: this.props.match.url + "/" + course.id, search: "?title=" + course.title }`
- Query Params: I can access the id by using props(like match) 
    `this.props.match.params.courseId` from `<Route path={this.props.match.url + "/:courseId"} component={Course} />`   
    or any param e.g. title with `URLSearchParams` `const query = new URLSearchParams(this.props.location.search)`
- Not Found Page: Order is important in Route, when adding not found page, it should be placed at the bottom because it can catch other routes.
