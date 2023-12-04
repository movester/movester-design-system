# Movester-Design-System

Design system and UI library for react and typescript projects.
Simple and modern styeld design is implented.
Focused on very basic components but will be imporved continuously.

# installation

```
npm i movester-design-system

```

# Version Info

- `1.1.0` 2023-12-4

  ### [추가]

  ### Radio

  **props**

  | prop name    | nullable | type                                          |
  | ------------ | -------- | --------------------------------------------- |
  | isChecked    | false    | boolean                                       |
  | setIsChecked | false    | React.Dispatch<React.SetStateAction<boolean>> |
  | children     | true     | children                                      |

  ***

  ### Textarea

  **props**

  | prop name    | nullable | type                                          |
  | ------------ | -------- | --------------------------------------------- |
  | isChecked    | false    | boolean                                       |
  | setIsChecked | false    | React.Dispatch<React.SetStateAction<boolean>> |

  ***

  ### [수정]

  ### Button

  - hover 시 cursor pointer 로 변하게 수정
  - div tag 로 구성되어있던 컴포넌트 button tag로 수정

  ### ComboBox

  - option box 높이 조정

- `1.0.0` 2023-11
  - 아래 컴포넌트들 추가

# Components

## Box

**props**

| prop name           | nullable | type          |
| ------------------- | -------- | ------------- |
| flexDirection       | true     | column        |
|                     |          | row           |
| gap                 | true     | number        |
| justifyContent      | true     | center        |
|                     |          | start         |
|                     |          | end           |
|                     |          | space-between |
| alignItems          | true     | center        |
|                     |          | start         |
|                     |          | end           |
| padding             | true     | number        |
|                     |          | string        |
| width               | true     | number        |
|                     |          | string        |
| height              | true     | number        |
|                     |          | string        |
| display             | true     | flex          |
|                     |          | block         |
|                     |          | inline        |
|                     |          | grid          |
| overflow            | true     | scroll        |
|                     |          | hidden        |
| backgroundColor     | true     | string        |
| border              | true     | string        |
| borderRadius        | true     | number        |
| gridTemplateColumns | true     | string        |
| boxShadow           | true     | string        |
| onClick             | true     | ()⇒void       |
| onMouseOver         | true     | ()⇒void       |
| ref                 | true     | any           |

---

## Button

**props**

| prop name | nullable | type      |
| --------- | -------- | --------- |
| variants  | true     | primary   |
|           |          | secondary |
| size      | false    | xs        |
|           |          | sm        |
|           |          | md        |
|           |          | lg        |
| disabled  | true     | boolean   |
| width     | true     | number    |
| onClick   | true     | () ⇒ void |

---

## Check Box

**props**

| prop name    | nullable | type                                          |
| ------------ | -------- | --------------------------------------------- |
| isChecked    | false    | boolean                                       |
| setIsChecked | false    | React.Dispatch<React.SetStateAction<boolean>> |

---

## Chip

**props**

| prop name | nullable | type              |
| --------- | -------- | ----------------- |
| variants  | true     | primary (default) |
|           |          | secondary         |
| size      | false    | sm                |
|           |          | md (default)      |

---

## Combo Box

**props**

| prop name | nullable | type                                                   |
| --------- | -------- | ------------------------------------------------------ |
| list      | false    | { name: string; id: string }[]                         |
| value     | false    | { name: string; id: string }                           |
| setValue  | false    | Dispatch<SetStateAction<{ name: string; id: string }>> |
| size      | false    | xs                                                     |
|           |          | sm                                                     |
|           |          | md                                                     |
| disabled  | true     | boolean                                                |
| lable     | true     | string                                                 |

---

## Divider

**props**

| prop name | nullable | type   |
| --------- | -------- | ------ |
| color     | true     | string |

## Input

**props**

| prop name   | nullable | type                                           |
| ----------- | -------- | ---------------------------------------------- |
| value       | false    | string                                         |
|             |          | number                                         |
| setValue    | false    | (e:React.ChangeEvent<HTMLInputElement>) ⇒ void |
| placeholder | true     | string                                         |
| invisible   | true     | boolean                                        |
| onClear     | true     | ()⇒void                                        |

---

## Typography

**props**

| prop name | nullable | type            |
| --------- | -------- | --------------- |
| variants  | true     | title1          |
|           |          | heading1        |
|           |          | heading2        |
|           |          | heading3        |
|           |          | body1           |
|           |          | body2 (default) |
|           |          | body3           |
|           |          | caption         |
| colors    | true     | string          |

### Radio

**props**
| prop name | nullable | type |
| --- | --- | --- |
| isChecked | false | boolean |
| setIsChecked | false | React.Dispatch<React.SetStateAction<boolean>> |
| children | true | children |

    ---

### Textarea

**props**
| prop name | nullable | type |
| --- | --- | --- |
| isChecked | false | boolean |
| setIsChecked | false | React.Dispatch<React.SetStateAction<boolean>> |

# related Projects

- [mymovester project](https://github.com/movester/mymovester-client-product)
