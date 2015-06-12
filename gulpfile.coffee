
gulp = require 'gulp'

gulp.task 'rsync', (cb) ->
  rsyncwrapper = require 'rsyncwrapper'
  rsyncwrapper.rsync
    ssh: true
    src: [
      'index.html', 'js', 'css', 'fonts'
    ]
    recursive: true
    args: ['--verbose']
    # config talk-ui to server in `~/.ssh/config` file
    dest: 'talk-ui:/teambition/server/talk-ui/icon-fonts'
    deleteAll: true
  , (error, stdout, stderr, cmd) ->
    if error?
      throw error
    console.error stderr
    console.log cmd
    cb()
