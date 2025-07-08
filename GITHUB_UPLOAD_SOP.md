# SOP: Uploading a New Project to GitHub

## Prerequisites

- You have a GitHub account.
- You have created a new, empty repository on GitHub (do not initialize with README, .gitignore, or license).
- Git is installed on your computer.
- You have your project folder ready.

---

## Step 1: Open Terminal/Command Prompt

Navigate to your project directory.  
Example (adjust path as needed):
```sh
cd "C:\Users\User\Desktop\DF New Website 2025\diagnostic.dojofinancier.ca"
```

---

## Step 2: Initialize Git (if not already initialized)

```sh
git init
```

---

## Step 3: Add All Project Files

```sh
git add .
```

---

## Step 4: Commit the Files

```sh
git commit -m "Initial commit"
```

---

## Step 5: Add the Remote Repository

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name.

```sh
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
```

---

## Step 6: Push to GitHub

If this is your first push, use the following command to set the upstream branch:

```sh
git push -u origin main
```
> If your default branch is `master`, use `master` instead of `main`.

---

## Step 7: Verify

Go to your GitHub repository in your browser. You should see all your project files uploaded.

---

## Troubleshooting

- **Authentication Issues:** If prompted, log in with your GitHub credentials or use a personal access token.
- **Branch Name Issues:** If you get an error about the branch name, check if your local branch is called `main` or `master` and adjust the push command accordingly.
- **Remote Already Exists:** If you get an error that the remote already exists, run:
  ```sh
  git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
  ```

---

## Copy-Paste Template

Replace the placeholders as needed:

```sh
cd "PATH/TO/YOUR/PROJECT"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

---

# Subsequent Pushes: Updating Your GitHub Repository

After the initial push, use these steps to upload new changes:

## Step 1: Open Terminal/Command Prompt

Navigate to your project directory:
```sh
cd "C:\Users\User\Desktop\DF New Website 2025\diagnostic.dojofinancier.ca"
```

## Step 2: Check the Status (Optional)

See which files have changed:
```sh
git status
```

## Step 3: Add Changed Files

Add all changed files:
```sh
git add .
```
Or, to add specific files:
```sh
git add path/to/your/file
```

## Step 4: Commit the Changes

Write a meaningful commit message:
```sh
git commit -m "Describe your changes here"
```

## Step 5: Push to GitHub

Push your changes:
```sh
git push
```

---

## Notes

- You do **not** need to run `git init` or `git remote add origin` again.
- If you are working on a branch other than `main`, use `git push origin branch-name`.
- If you pull changes from GitHub (e.g., if someone else has pushed changes), use:
  ```sh
  git pull
  ```
  before pushing, to avoid conflicts.

---

## Copy-Paste Template for Subsequent Pushes

```sh
cd "PATH/TO/YOUR/PROJECT"
git add .
git commit -m "Describe your changes"
git push
``` 