to main content

Search Netlify…

S
SONU JAATsonutheking009@gmail.com

Projects
puredeepclean
Switch projects
Project navigation
Deploy detailsYour deploy failed due to an error
Deploy failed for puredeepclean
A failure prevented us from deploying your project.
Why did it fail?
Today at 6:01 AM

Production: main@6bb7775

Retry
Deploy settings
Delete deploy
Deploy log
Why did it fail?




Maximize log

Isolated relevant log lines

line 45: Netlify ran the build command: npm run build
line 48: npm tried to open: package.json
line 50: ENOENT: no such file or directory, open 'package.json' (npm could not find package.json)
line 33-34: Current directory used for the build: repo root ( /opt/build/repo )
line 69: Netlify is configured to publish /opt/build/repo/dist
Diagnosis

Error type: ENOENT (filesystem error) — npm cannot find package.json.
Cause: The build runs npm in the repository root, but there is no package.json at the repo root. This happens when the JS project (package.json) is in a subdirectory or package.json was not committed to the repo. Netlify therefore cannot run npm scripts.
