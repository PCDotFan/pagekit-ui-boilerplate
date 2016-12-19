<!DOCTYPE html>
<html>
  <head>
    <title>@yield('title', 'Sample')</title><!--第一个参数是该区块的变量名称，第二个参数表示当指定变量的值为空值时，使用 Sample 来作为默认值。-->
  </head>
  <body>
    @yield('content')
  </body>
</html>
