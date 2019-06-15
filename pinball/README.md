# pinball

一个简单的canvas桌球游戏，移动鼠标改变球杆方向，按下鼠标蓄力，松开击球。  
使用 browserify + gulp + babel + uglify 实现自动化打包、转译和压缩。

兼容性：推荐使用最新版Chrome或Firefox浏览器，IE浏览器兼容性存在问题。

目录结构:

> dist
  >> output.js 打包输出的js文件

> src 源代码
>> main.js 游戏入口文件

>> global.js 管理各元素公用的状态和方法

>> ele 部件
  >>> bar.js 击球杆和指针线  
      board.js 提示框  
      hole.js 球洞  
      music.js 游戏音效  
      table.js 球桌  

>> player 游戏元素
  >>> ball.js 桌球类  
      mainball.js 主球  
      gameball.js 主球之外的球  
      stage.js 关卡  

>> stages 状态
  >>> start.js 开始状态，显示开始界面  
      play.js 游戏状态  
      notice.js 提示状态，显示提示信息  

>> runtime 必需的运行时
  >>> sprite.js 精灵类  
        (painter.js 精灵绘制器)  
      shape.js 形状类，用于构造碰撞实体  
        (circle.js 圆形类)  
        (rectangle.js 矩形类)  
      vector.js 向量类  
      timer.js 计时器类  
      gameState.js 游戏状态管理器  