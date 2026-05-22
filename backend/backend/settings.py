from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent


# SECURITY WARNING
SECRET_KEY = 'django-secret-key'

# DEVELOPMENT MODE
DEBUG = True

ALLOWED_HOSTS = ["*"]


# INSTALLED APPS
INSTALLED_APPS = [

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # THIRD PARTY APPS
    'rest_framework',
    'corsheaders',

    # LOCAL APPS
    'chatbot',
]


# MIDDLEWARE
MIDDLEWARE = [

    'corsheaders.middleware.CorsMiddleware',

    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


ROOT_URLCONF = 'backend.urls'


# TEMPLATES
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


WSGI_APPLICATION = 'backend.wsgi.application'


# DATABASE (MYSQL)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'chatbot_db',
        'USER': 'root',
        'PASSWORD': 'Bluemoon@2004',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}


# PASSWORD VALIDATION
AUTH_PASSWORD_VALIDATORS = []


# LANGUAGE
LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# STATIC FILES
STATIC_URL = 'static/'


# DEFAULT PRIMARY KEY
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# CORS
CORS_ALLOW_ALL_ORIGINS = True