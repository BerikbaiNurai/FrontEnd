Lab_04:

Task2: Refactoring - ArticleList, ArticleItem, AddArticle

<!-- Overview -->
This Lab refactors a monolithic article management component into smaller, reusable React components: ArticleList, ArticleItem, AddArticle and Articlemanager. This goal was to:
    Seperate responsibilities into smaller components
    use props to pass data and event handles
    Move local state into the child component
    Make components reusable and maintainable

<!-- Components -->

<!-- 1.ArticleManager -->
Role: 
    Parent component that holds the main state
Responsibilities: 
    Add new articles
    Remove articles
    Pass data and handlers to child components

<!-- 2.AddArticle -->
Role: 
    Form for adding a new article
Responsibilities: 
    Receive `title` and `summary` values via props
    Receive handlers for input changes and adding articles
    Display form inputs and add button

<!-- 3.ArticleList -->
Role: 
    Renders a list of articles
Responsibilities: 
    Receive `articles` array and `onClickremove` handler
    Map each article to an `ArticleItem` component

<!-- 4.ArticleItem -->
Role: 
    Represent a single article
Responsibilities: 
    Manage its own expansion state (`isOpened`) using `useState`
    Toggle display of the article summary
    Call `onClickRemove` when the remove button is clicked

<!-- Refactoring Approach -->
Started from a monolithic component managing everything in one place. Extracted form inputs into AddArticle. Extracted article list into ArticleList and each article into ArticleItem. Moved local toggle state from parent to ArticleItem for better performance. Ensured all components receive necessary data and functions via props.