# Change log

## 2025/11/29 - Version 1.0.0 - ITA
Genesis

---
## 2025/11/29 - Version 1.0.1 - ITA
Added search keywords to package.json file.

---
## 2025/11/29 - Version 1.0.2 - ITA
- Added repository, issues and homepage URLs to package.json.

---
## 2025/11/30 - Version 1.0.3 - ITA
When this package was imported from npm into a vite based project, it complained about a missing PropTypes default import in prop-types. Vite required explicit non-default import of prop-types object.

## 2025/12/01 - Verson 1.0.4 - ITA
- Reverted previous code because issues related to importing into a Vite project did not resolve, and
- Updated build process to use Vite library mode (ESM + CJS bundles).

## 2025/12/01 - Version 1.0.5 - ITA
- Removed prop-types from the external dependencies list.